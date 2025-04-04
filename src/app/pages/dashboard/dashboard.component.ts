import { Component } from '@angular/core';
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatPaginator} from "@angular/material/paginator";
import {MatChip} from "@angular/material/chips";
import {DatePipe, NgForOf} from "@angular/common";
interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatDivider,
    MatButton,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatPaginator,
    MatChip,
    MatCardHeader,
    DatePipe,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}


