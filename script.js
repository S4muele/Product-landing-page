// this fixes the nav-bar covering the content when jumping to page section 
const navBar = document.getElementById("nav-bar")
const header = document.getElementById("header")
const navBarHeight = navBar.getComputedStyle
const headerHeight = header.offsetHeight //this ain't workin !
    
if (window.innerWidth < 550) {
  
  window.addEventListener('hashchange', function() {

    scrollBy(0, -navBarHeight)

  })
} else if (window.innerWidth > 449) {
  
  window.addEventListener('hashchange', function() {

    scrollBy(0, -headerHeight)

  }) 
}