ServerEvents.tags('item',
     event => {
    
    event.get('botania:seed_apothecary_reagent')
    .add('bountifulfares:grass_seeds')
})

ServerEvents.tags('block',
     event => {
    
    event.get('botania:agricarnation/apply_bonemeal')
    .add([
        '#bountifulfares:apple_leaves',
        '#bountifulfares:orange_leaves',
        '#bountifulfares:lemon_leaves',
        '#bountifulfares:plum_leaves',
        '#bountifulfares:golden_apple_leaves',
        'bountifulfares:hoary_leaves',
        'bountifulfares:walnut_leaves',
        '#spicedcider:cacao_leaves',
        'spicedcider:cacao_pod',
        'bountifulfares:palm_crown'
    ])

    event.get('botania:horn_of_the_wild_breakable')
    .add([
        'spicedcider:cacao_pod',
        'spicedcider:hanging_pear'
    ])

    event.get('drizzleproof:static_blocks')
        .add('nomansland:wooden_scaffolding')
        .add('sugarcane')

    event.get('minecraft:mineable/pickaxe')
    .add('glowstone')

    event.get('vc_gliders:updraft')
    .add([
        '#minecraft:fire',
        '#blockbox:braziers',
        '#decorative_blocks:braziers',
        'supplementaries:fire_pit'
    ])

})

ServerEvents.tags('entity_type',
     event => {
        event.get('botania:cocoon/common')
        .add([
            'nomansland:deer',
            'nomansland:goose'
        ])
        
        event.get('botania:cocoon/rare')
        .add([
            'nomansland:tortoise',
            'nomansland:living_pot'
        ])

        event.get('botania:cocoon/common_aquatic')
        .add('nomansland:billhook_bass')
})