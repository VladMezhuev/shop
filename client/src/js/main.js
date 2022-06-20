// const hoverFn = (trigger, window, timeout) => {
//   setTimeout(() => {
//     trigger.addEventListener('mouseenter', () => {
//       window.classList.add('is-active')
//     })
//   }, timeout)
// }

const menuIvents = () => {
  const menuTrigger = document.getElementById('js-trigger')
  const menuList = document.getElementById('js-menu')
  const menuItems = [...document.getElementsByClassName('js-menu-spoiler')]

  menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('is-active')
    menuList.classList.toggle('is-active')
  })

  menuItems.forEach(item => {
    const [spoilerMenu] = item.getElementsByClassName('js-submenu-spoiler')
    item.addEventListener('click', () => {
      spoilerMenu.classList.toggle('is-active')
    })
    item.addEventListener('mouseleave', () => {
      if (spoilerMenu.classList.contains('is-active')) {
        spoilerMenu.classList.remove('is-active')
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  menuIvents()
})
