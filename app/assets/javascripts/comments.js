var Comments

Comments = {}

Comments.displayComment = function(comment) {

  /*
  <blockquote class="blockquote">
          <p class="mb-0">great</p>
          <footer class="blockquote-footer">
            Added by <a href="/en/users/4">
                     <img class="avatar-xs" alt="Avatar for " src="https://68.media.tumblr.com/7d65a925636d6e3df94e2ebe30667c29/tumblr_nq1zg0MEn51qg6rkio1_500.jpg">
              </a> on 22 Aug 2020 at 16:36</footer>
        </blockquote>
  */

  var commentBody = document.createElement('p');
  commentBody.className = "mb-0";
  commentBody.appendChild(document.createTextNode(comment.body))

  var avatar = document.createElement('img');
  avatar.className = 'avatar-xs';
  avatar.setAttribute('alt', 'Avatar for');
  avatar.setAttribute('src', comment.avatar);

  var commenterLink= document.createElement('a');
  commenterLink.setAttribute('href', comment.commenterUrl);
  commenterLink.appendChild(avatar);

  var footer = document.createElement('footer');
  footer.className = "blockquote-footer";
  footer.appendChild(document.createTextNode('Added by'));
  footer.appendChild(document.createTextNode(comment.commenter));
  footer.appendChild(commenterLink);
  footer.appendChild(document.createTextNode(comment.dateTime));


  var commentListItem = document.createElement('blockquote');
  commentListItem.appendChild(commentBody);
  commentListItem.appendChild(footer)


  var comments = document.getElementById('commentList');
  comments.appendChild(commentListItem);

  }

/*
  var commentBody = document.createElement('p');
  commentBody.className = "mb-0";
  commentBody.createTextNode(comment.body)


  var footer = document.createElement('footer');
  footer.className = "blockquote-footer";
  footer.createTextNode('Added by')
  footer.appendChild(commentUser)

  var avatar = document.createElement('img');
  avatar.className = 'avatar-xs';
  avatar.setAttribute('alt', 'Avatar for');
  avatar.setAttribute('src', '#images/avatar.png');

  var commentUser = document.createElement('a');
  commentUser.setAttribute('href', comment.user);
  commentUser.appendChild(avatar);


  var commentTime = document.createElement('time');
  commentTime.setAttribute('datetime', comment.datetime);
  commentTime.appendChild(document.createTextNode(comment.when));




  var commentList = document.createElement('div');
  commentList.className = 'm-3';

---------------

  var commentTime = document.createElement('time');
  commentTime.setAttribute('datetime', comment.datetime);
  commentTime.appendChild(document.createTextNode(comment.when));

  var commentHeader = document.createElement('h3');
  commentHeader.className = 'comment__title';
  commentHeader.appendChild(document.createTextNode(comment.name));
  commentHeader.appendChild(commentTime);

  var commentParagraph = document.createElement('p');
  commentParagraph.appendChild(document.createTextNode(comment.body));

  var commentBody = document.createElement('div');
  commentBody.className = 'comment__body';
  commentBody.appendChild(commentHeader);
  commentBody.appendChild(commentParagraph);

  var avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.setAttribute('src', '#images/avatar.png');

  var commentListItem = document.createElement('li');
  commentListItem.className = 'comment';
  commentListItem.appendChild(avatar);
  commentListItem.appendChild(commentBody);

  var comments = document.getElementById('commentList');
  comments.insertBefore(commentListItem, comments.firstChild);



*/
