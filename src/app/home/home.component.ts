import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem, MessageService, TreeNode} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  @ViewChild('op', {static: false}) model;
  data: TreeNode[];
  items: MenuItem[];
  selectedFile: TreeNode;
  dateValue;
  display = false;
  searchMode: boolean;
  currentYear = new Date().getFullYear();
  yearRange = `1000:${this.currentYear}`;

  constructor(private messageService: MessageService) {
  }

  nodeSelect(event): void {
    console.log(event, this.model);
    if (!event.node.children) {
      this.display = true;
    }
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
  }

  ngOnInit(): void {
    this.data = [{
      label: 'ROOT',
      expanded: true,
      children: [
        {
          label: 'Frontend Apps',
          expanded: true,
          children: [
            {
              label: 'Internal',
              children: [
                {label: 'App A'},
                {label: 'App B'},
                {label: 'App C'},
                {label: 'App D'},
              ]
            },
            {
              label: 'External',
              children: [
                {label: 'App A'},
                {label: 'App B'}
              ]
            }
          ]
        },
        {
          label: 'Backend Apps',
          expanded: true,
          children: [
            {
              label: 'Internal',
              children: [
                {label: 'App A'},
                {label: 'App B'}
              ]
            },
            {
              label: 'External',
              children: [
                {label: 'App A'},
                {label: 'App B'}
              ]
            }
          ]
        },
        {
          label: 'RPA',
          expanded: true,
          children: [
            {
              label: 'Internal',
              selectable: true,
              children: [
                {label: 'App A'},
                {label: 'App B'}
              ]
            },
            {
              label: 'External',
              selectable: true,
              children: [
                {label: 'App A'},
                {label: 'App B'}
              ]
            }
          ]
        }
      ]
    }];
    this.data.forEach(node => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean): void {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  showDialog(): void {
    this.display = true;
  }
}
