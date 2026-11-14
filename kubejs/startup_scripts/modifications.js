ItemEvents.modification(event => {
  event.modify('vc_gliders:paraglider_wood', item => {
    item.maxDamage = 1000
  })
})