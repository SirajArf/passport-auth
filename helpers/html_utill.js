

module.exports = {
 
//strip tags method take story with paragrapgh tag as a input  
//this method return story without paragraph tag  
//this method is used in index handlebars  
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '')
  },

  //select method is used in edit handlebars
  //it let the user change status of story from public to private and vice-versa
  //it takes the status of story in selected parameter
  //it return the status of story
  selectOptions: function (selected, options) {
    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$& selected="selected"'
      )
      .replace(
        new RegExp('>' + selected + '</option>'),
        ' selected="selected"$&'
      )
  },
}