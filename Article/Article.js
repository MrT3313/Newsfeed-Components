// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
      this.domElement = domElement;
    // -v1- 
      // create a reference to the ".expandButton" class. 
        this.expandButton = domElement.querySelector('.expandButton')
          console.log('SELECTED EXPAND BUTTONS:')

      // Using your expandButton reference, update the text on your expandButton to say "expand"
        this.expandButton.textContent = 'expand'
        console.log(this.expandButton.textContent)

    // -v2-
      // this.expandButton = domElement.querySelectorAll('.expandButton')

      // this.expandButton.forEach( button => {
      //   button.textContent = 'expand'
      // })
      // console.log(this.expandButton.textContent)
      // console.log(this.expandButton)

    // Set a click handler on the expandButton reference, calling the expandArticle method.
      console.log(this.expandButton)  
      this.expandButton.addEventListener('click', this.expandArticle(domElement))
  }

  expandArticle(domElement) {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    console.log('TEST EXPAND ARTICLE TOGGLE:')
      console.log(domElement.classList)
    domElement.classList.toggle("article-open")
      console.log(domElement.classList)
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList 
and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

  let articles = document.querySelectorAll('.article');
    console.log('SELECTED ARTICLES:')
    console.log(articles)
  articles.forEach( article => {
    const newArticle = new Article(article)
  })