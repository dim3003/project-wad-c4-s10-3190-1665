var Comments

Comments = {}

Comments.displayComment = function(comment) {

  var commentBody = document.createElement('p');
  commentBody.className = "mb-0";
  commentBody.appendChild(document.createTextNode(comment.body))

  var avatar = document.createElement('img');
  avatar.className = 'avatar-xs';
  avatar.setAttribute('alt', 'Commenter avatar');
  avatar.setAttribute('src', comment.avatar);

  var commenterLink= document.createElement('a');
  commenterLink.setAttribute('href', comment.commenterUrl);
  commenterLink.appendChild(avatar);
  commenterLink.appendChild(document.createTextNode(comment.commenter + " "));


  var footer = document.createElement('footer');
  footer.className = "blockquote-footer";
  footer.appendChild(document.createTextNode('Added by '));
  footer.appendChild(commenterLink);
  footer.appendChild(document.createTextNode('on ' + comment.datetime));

  var commentListItem = document.createElement('blockquote');
  commentListItem.className = "blockquote";
  commentListItem.appendChild(commentBody);
  commentListItem.appendChild(footer)


  var comments = document.getElementById('commentList');
  comments.appendChild(commentListItem);

  }
