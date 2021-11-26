import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from '../../models/Subscription';
import { Author } from 'src/app/models/Author';
import { AuthorService } from 'src/app/services/author.service';
import { JwtService } from 'src/app/services/jwt.service';
import { SubscriptionsService } from 'src/app/services/subscriptions.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  author!: Author
  authorId!: number
  isSubscriptionExist: boolean = false
  subscriptionId: number = 0
  userId: string = " "
  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService,
    private subscriptionService: SubscriptionsService,
    private jwtService: JwtService,
    private oauthService: OAuthService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const authorIdFromRoute = Number(routeParams.get('id'));
    this.authorId = authorIdFromRoute;
    this.userId = this.jwtService.getId();
    this.authorService.getAuthorById(authorIdFromRoute)
      .subscribe((data: Author) => this.author = data);
    if (this.userId != undefined) {
      this.subscriptionService
        .checkExistSubscription(this.authorId, this.userId)
        .subscribe((subsc: Subscription) => {
          if (subsc != null) {
            this.subscriptionId = subsc.id,
              this.isSubscriptionExist = true
          }
        })
    }
  }
  subscribe() {
    if (this.userId != undefined) {
      this.subscriptionService.addSubscription(this.authorId, this.userId)
        .subscribe(() => {
          this.isSubscriptionExist = true;
          this.ngOnInit();
        })
    }
    else {
      alert("Please authenticate to subscribe to the author")
    }
  }
  unsubscribe() {
    this.subscriptionService.deleteSubscription(this.subscriptionId)
      .subscribe(() => {
        this.isSubscriptionExist = false;
        this.ngOnInit();
      })
  }
}
