const menuIvents = () => {
  const MENU_TRIGGER = document.getElementById('js-trigger')
  const MENU_LIST = document.getElementById('js-menu')
  const MENU_ITEMS = [...document.getElementsByClassName('js-menu-spoiler')]

  MENU_TRIGGER.addEventListener('click', () => {
    MENU_TRIGGER.classList.toggle('is-active')
    MENU_LIST.classList.toggle('is-active')
  })

  MENU_ITEMS.forEach(item => {
    const [SPOILER_MENU] = item.getElementsByClassName('js-submenu-spoiler')

    item.addEventListener('click', () => {
      SPOILER_MENU.classList.toggle('is-active')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  menuIvents()
})
