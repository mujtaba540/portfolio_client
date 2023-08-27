import { Component } from '@angular/core';


@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  images= [
    {
      img:"angular.png",
      val:"Angular"
    },
    {
      img:"bootstrap.png",
      val:"Bootstrap"
    },
    {
      img:"css.png",
      val:"CSS"
    },
    {
      img:"html.png",
      val:"HTML"
    },
    {
      img:"node_2.png",
      val:"Node.js"
    },
    {
      img:"sql-server.png",
      val:"SQL"
    },
    {
      img:"js.png",
      val:"Javascript"
    },
    {
      img:"ts.png",
      val:"Typescript"
    },
    {
      img:"ex_2.png",
      val:"Express.js"
    },
    {
      img:"mongo.png",
      val:"MongoDB"
    },
  ]
}
