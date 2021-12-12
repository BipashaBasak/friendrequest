import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }

  getData() {
    let data = [
      {
        id: 1,
        name: 'John'
      }
    ]
    return data;
  }

  getCities() {
    return this.httpClient.get('http://localhost/php-rest/php-core-rest/api/get-cities.php');
  }

  getPosts() {
    // return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
    return this.httpClient.get('http://localhost/full-stack-guest/full-stack/Apis/data.php');

  }

  register(payload: any) {
    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/register.php', payload);
  }

  login(payload: any) {

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/login.php', payload);

  }

  getProfile() {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    const body = {
      "id": this.authService.getLoggedInUserId()
    }

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/user-profile.php', body, header);
  }

  getAllPosts() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.get('http://localhost/php-rest/php-core-rest/api/get-all-posts.php', header);
  }

  createPost(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/create-posts.php', payload, header);
  }

  getPostDetails(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-post-details.php', payload, header);
  }

  getPostComments(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-post-comments.php', payload, header);
  }

  getPostLikes(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-post-likes.php', payload, header);
  }

  addRemoveLikes(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/add-remove-like.php', payload, header);
  }
  createComments(payload) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/create-comment.php', payload, header);
  }

  getAllUsers(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-all-users.php', payload, header);
  }

  getChatMessages(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-chat-messages.php', payload, header);
  }

  sendChatMessages(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/send-chat-messages.php', payload, header);
  }

  addFriends(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/add-friend.php', payload, header);
  }

  getFriendRequests(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-friend-requests.php', payload, header);
  }

  manageFR(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/manage-friend-request.php', payload, header);
  }

  getFriends(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/get-friends.php', payload, header);
  }

  imageUpload(payload) {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.authService.getToken())
    };

    return this.httpClient.post('http://localhost/php-rest/php-core-rest/api/image-upload.php', payload, header);
  }
}

