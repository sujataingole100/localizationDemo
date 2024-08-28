import { Component, Input, OnInit } from '@angular/core';
import { TreeNgxModule } from 'tree-ngx';
import { TreeService } from '../tree.service';
@Component({
  selector: 'app-tree-folder',
  templateUrl: './tree-folder.component.html',
  styleUrls: ['./tree-folder.component.css'],
})
export class TreeFolderComponent implements OnInit {
  @Input() nodes: any[] = [
    {
      "name": "Crop commodities",
      "children": [
        {
          "name": "BT",
          "children": []
        },
        {
          "name": "NT",
          "children": [
            {
              "name": "Vegetbles",
              "children": [
                {
                  "name": "BT",
                  "children": []
                },
                {
                  "name": "NT",
                  "children": [
                    {
                      "name": "Seeweed",
                      "children": []
                    },
                    {
                      "name": "Lettuce and sprouts",
                      "children": []
                    },
                    {
                      "name": "Vegetable juice and drink",
                      "children": []
                    }
                  ]
                },
                {
                  "name": "RT",
                  "children": []
                },
                {
                  "name": "UF",
                  "children": []
                }
              ]
            },
            {
              "name": "Herbs and spices",
              "children": []
            },
            {
              "name": "Nuts and seeds",
              "children": []
            },
            {
              "name": "Fruit",
              "children": []
            },
            {
              "name": "Processing crop",
              "children": []
            },
            {
              "name": "Food crop",
              "children": []
            },
            {
              "name": "Stalk and stem crop",
              "children": []
            }
          ]
        },
        {
          "name": "UF",
          "children": []
        },
        {
          "name": "USE",
          "children": []
        }
      ]
    },
    {
      "name": "A file"
    }
  ];

  data = [
    {
      Date: '23-02-2024',
      tenderName: [
        {
          tenderName: 'Tender1',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf1', 'pdf2', 'pdf3', 'pdf4', 'pdf5'],
            },
          ],
        },
      ],
    },
    {
      Date: '24-02-2024',
      tenderName: [
        {
          tenderName: 'Tender2',
          categories: [
            {
              categoryName: 'Financial',
              pdfArray: ['pdf6', 'pdf7', 'pdf8'],
            },
            {
              categoryName: 'Technical',
              pdfArray: ['pdf9', 'pdf10'],
            },
          ],
        },
      ],
    },
    {
      Date: '25-02-2024',
      tenderName: [
        {
          tenderName: 'Tender3',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf11', 'pdf12'],
            },
            {
              categoryName: 'Legal',
              pdfArray: ['pdf13', 'pdf14', 'pdf15'],
            },
          ],
        },
      ],
    },
    {
      Date: '26-02-2024',
      tenderName: [
        {
          tenderName: 'Tender4',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf16', 'pdf17', 'pdf18'],
            },
          ],
        },
        {
          tenderName: 'Tender5',
          categories: [
            {
              categoryName: 'Financial',
              pdfArray: ['pdf19', 'pdf20', 'pdf21'],
            },
          ],
        },
      ],
    },
    {
      Date: '27-02-2024',
      tenderName: [
        {
          tenderName: 'Tender6',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf22'],
            },
            {
              categoryName: 'Financial',
              pdfArray: ['pdf23', 'pdf24'],
            },
          ],
        },
      ],
    },
    {
      Date: '28-02-2024',
      tenderName: [
        {
          tenderName: 'Tender7',
          categories: [
            {
              categoryName: 'Legal',
              pdfArray: ['pdf25', 'pdf26'],
            },
          ],
        },
      ],
    },
    {
      Date: '01-03-2024',
      tenderName: [
        {
          tenderName: 'Tender8',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf27', 'pdf28', 'pdf29'],
            },
          ],
        },
      ],
    },
    {
      Date: '02-03-2024',
      tenderName: [
        {
          tenderName: 'Tender9',
          categories: [
            {
              categoryName: 'Financial',
              pdfArray: ['pdf30', 'pdf31'],
            },
          ],
        },
      ],
    },
    {
      Date: '03-03-2024',
      tenderName: [
        {
          tenderName: 'Tender10',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf32', 'pdf33'],
            },
            {
              categoryName: 'Legal',
              pdfArray: ['pdf34', 'pdf35'],
            },
          ],
        },
      ],
    },
    {
      Date: '04-03-2024',
      tenderName: [
        {
          tenderName: 'Tender11',
          categories: [
            {
              categoryName: 'Technical',
              pdfArray: ['pdf36', 'pdf37', 'pdf38'],
            },
            {
              categoryName: 'Legal',
              pdfArray: ['pdf39', 'pdf40'],
            },
          ],
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public onFolderButtonClick(folder: any) {
    folder['expand'] = !folder['expand'];
  }

  public trackNode(index: any, folder: any) {
    return folder.name;
  }
  processNodes() {
    return this.nodes.map((node: any) => {
      if (node.child) {
        node['expand'] = false;
      }
    });
  }
}
