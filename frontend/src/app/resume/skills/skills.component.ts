import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface SkillsNode {
  name: string;
  children?: SkillsNode[];
}

const TREE_DATA: SkillsNode[] = [
  {
    name: 'Programming Languages & Frameworks',
    children: [
      {name: 'Java'},
      {name: 'C# / Dotnet'},
      {name: 'Spring Boot'},
      {name: 'Angular'},
      {name: 'C/C++'},
      {name: 'Javascript'},
      {name: 'Python'},
      {name: 'MVC'},
      {name: 'Databases',
        children: [
          {name: 'SQL Server'},
          {name: 'Hibernate'},
          {name: 'NoSQL'},
          {name: 'PostgreSQL'},
    ]
  }]},
  {
    name: 'Technologies & Tools',
    children: [
      {name: 'REST'},
      {name: 'Docker'},
      {name: 'Linux'},
      {name: 'AWS'},
      {name: 'Git (GitLab and GitHub'},
      {name: 'GitLab Runners and Jenkins'},
      {name: 'Android Development'},
      {name: 'UML Modeling'},
      {name: 'Testing tools (Eggplant, Selenium, JUnit, NUnit)'},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  private transformer = (node: SkillsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
