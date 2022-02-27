

module.exports = {
    //editIcon method let the edit icon show on client's own story
    //storyUser: who is writer of story
    //loggedUser: which client is logged in
    //loggedUser and storyUser can be same or different people
    //floating parameter let the edit icon float form left to right
    //editIcon method is used in index handlebars
  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser._id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`
      }
    } else {
      return ''
    }
  },
 
}