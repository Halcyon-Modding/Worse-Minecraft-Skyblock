ServerEvents.recipes(event => {

const removedIds = [
    /botania:mana_infusion\/alchemy\/sapling\/.*/,
    /botania:mana_infusion\/alchemy\/crop\/.*/,
    /botania:mana_infusion\/alchemy\/flower\/.*/,
    /botania:mana_infusion\/alchemy\/fungus\/.*/,
    /botania:mana_infusion\/alchemy\/shrub\/.*/,
    /botania:mana_infusion\/alchemy\/log\/.*/,
    /botania:mana_infusion\/alchemy\/stone\/.*/,

    /botania:mana_infusion\/conjuration\/.*leaves/,

    'quark:building/crafting/furnaces/blackstone_smoker',
    'quark:building/crafting/furnaces/deepslate_smoker',
    'quark:building/crafting/cobblestone_bricks',
    'botania:diluted_mana_pool',
    'spicedcider:bb/abyssal_decor/stripped_white_wood_palisade',
    'nomansland:bundle',

    'minecraft:glow_item_frame',
    'nomansland:mushroom_stew',
    'spicedcider:pocket_jukebox',

    'botania:mana_infusion/pasture_seeds',

    'minecraft:recovery_compass',

    'vc_gliders:paraglider_wood'
]



removedIds.forEach(removedId => {
        event.remove({id: removedId})
    })


const saplings = [
    'minecraft:oak_sapling',
    'nomansland:autumnal_oak_sapling',
    'minecraft:spruce_sapling',
    'nomansland:pine_sapling',
    'minecraft:birch_sapling',
    'nomansland:yellow_birch_sapling',
    'minecraft:jungle_sapling',
    'minecraft:mangrove_propagule',
    'minecraft:acacia_sapling',
    'nomansland:maple_sapling',
    'nomansland:red_maple_sapling',
    'minecraft:dark_oak_sapling',
    'nomansland:walnut_sapling',
    'nomansland:willow_sapling',
    'minecraft:cherry_sapling',
    'nomansland:pale_cherry_sapling',
    'quark:ancient_sapling',
    'quark:blue_blossom_sapling',
    'quark:lavender_blossom_sapling',
    'quark:orange_blossom_sapling',
    'quark:yellow_blossom_sapling',
    'quark:red_blossom_sapling'
]

const crops = [
    'minecraft:wheat_seeds',
    'minecraft:pumpkin_seeds',
    'minecraft:melon_seeds',
    'minecraft:beetroot_seeds',
    'supplementaries:flax_seeds',
    'bountifulfares:maize_seeds',
    'bountifulfares:leek_seeds',
    'bountifulfares:tea_berries',
    'minecraft:potato',
    'minecraft:carrot',
    'abyssal_decor:amaranth_1',
    'abyssal_decor:muckroot_item',
    'abyssal_decor:bog_apple_leaves',
    'abyssal_decor:spidercorn_crop'
]

const flowers = [
    'minecraft:dandelion',
    'minecraft:poppy',
    'minecraft:blue_orchid',
    'minecraft:allium',
    'minecraft:azure_bluet',
    'minecraft:red_tulip',
    'minecraft:orange_tulip',
    'minecraft:white_tulip',
    'minecraft:pink_tulip',
    'minecraft:oxeye_daisy',
    'minecraft:cornflower',
    'minecraft:lily_of_the_valley',
    'bountifulfares:honeysuckle',
    'bountifulfares:violet_bellflower',
    'nomansland:starflower',
    'nomansland:thistle',
    'nomansland:autumn_crocus',
    'nomansland:wild_mint',
    'nomansland:aconite',
    'nomansland:yellow_lupine',
    'nomansland:pink_lupine',
    'nomansland:blue_lupine',
    'nomansland:red_lupine',
    'nomansland:lavender_bush',
    'bountifulfares:chamomile_flowers',
    'minecraft:pink_petals',
    'nomansland:white_flowerbed',
    'nomansland:violet_flowerbed',
    'nomansland:blue_flowerbed',
    'nomansland:yellow_flowerbed',
    'nomansland:red_flowerbed',
    'minecraft:spore_blossom',
    'nomansland:rafflesia',
    'minecraft:sunflower',
    'minecraft:lilac',
    'minecraft:rose_bush',
    'minecraft:peony',
    'abyssal_decor:daffodil',
    'abyssal_decor:aster',
    'abyssal_decor:snapleaf',
    'abyssal_decor:sneezeweed_bottom',
    'abyssal_decor:bark_orchid'
]

const fruitSaplings = [
    'bountifulfares:apple_sapling',
    'bountifulfares:orange_sapling',
    'bountifulfares:lemon_sapling',
    'bountifulfares:plum_sapling',
    'spicedcider:pear_sapling',
    'spicedcider:cacao_sapling',
    'bountifulfares:walnut_sapling',
    'bountifulfares:coconut'
]

const mushrooms = [
    'minecraft:brown_mushroom',
    'minecraft:red_mushroom',
    'nomansland:field_mushroom',
    'nomansland:shelf_mushroom',
    'quark:glow_shroom',
    'minecraft:crimson_fungus',
    'minecraft:warped_fungus',
    'minecraft:glass'
]


const shrubs = [
    'minecraft:short_grass',
    'nomansland:grass_sprouts',
    'nomansland:oat_grass',
    'nomansland:frosted_grass',
    'minecraft:fern',
    'nomansland:fiddlehead',
    'nomansland:short_beachgrass',
    'nomansland:tall_beachgrass',
    'nomansland:cave_weeds',
    'nomansland:dried_grass',
    'minecraft:dead_bush',
    'nomansland:pickleweed',
    'nomansland:succulent',
    'nomansland:barrel_cactus',
    'nomansland:mycelium_growths',
    'nomansland:mycelium_sprouts',
    'nomansland:reeds',
    'nomansland:cattail',
    'minecraft:big_dripleaf',
    'minecraft:glow_lichen',
    'quark:glow_lichen_growth',
    'nomansland:beard_moss',
    'nomansland:water_mosaic',
    'nomansland:duckweed',
    'minecraft:sea_pickle',
    'minecraft:kelp',
    'abyssal_decor:cinnamon_bush'
]

const logs = [
    'minecraft:oak_log',
    'minecraft:spruce_log',
    'nomansland:pine_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'nomansland:walnut_log',
    'minecraft:mangrove_log',
    'minecraft:cherry_log',
    'quark:ancient_log',
    'quark:azalea_log',
    'quark:blossom_log',
    'bountifulfares:walnut_log',
    'architects_palette:twisted_log',
    'bountifulfares:hoary_log',
    'nomansland:maple_log',
    'nomansland:willow_log',
    'abyssal_decor:white_wood_log',
    'abyssal_decor:blackwood_log',
    'abyssal_decor:cinnamon_log'
]

const fruitLogs = [
    'bountifulfares:apple_log',
    'bountifulfares:orange_log',
    'bountifulfares:lemon_log',
    'bountifulfares:plum_log',
    'bountifulfares:palm_log',
    'spicedcider:cacao_log',
    'spicedcider:pear_log'
]

const leaves = [
    'minecraft:oak_leaves',
    'nomansland:autumnal_oak_leaves',
    'minecraft:spruce_leaves',
    'nomansland:pine_leaves',
    'nomansland:frosted_leaves',
    'minecraft:birch_leaves',
    'nomansland:yellow_birch_leaves',
    'minecraft:jungle_leaves',
    'minecraft:acacia_leaves',
    'nomansland:maple_leaves',
    'nomansland:red_maple_leaves',
    'minecraft:dark_oak_leaves',
    'nomansland:walnut_leaves',
    'nomansland:willow_leaves',
    'minecraft:mangrove_leaves',
    'minecraft:cherry_leaves',
    'nomansland:pale_cherry_leaves',
    'minecraft:azalea_leaves',
    'minecraft:flowering_azalea_leaves',
    'bountifulfares:apple_leaves',
    'bountifulfares:flowering_apple_leaves',
    'bountifulfares:orange_leaves',
    'bountifulfares:flowering_orange_leaves',
    'bountifulfares:lemon_leaves',
    'bountifulfares:flowering_lemon_leaves',
    'bountifulfares:plum_leaves',
    'bountifulfares:flowering_plum_leaves',
    'bountifulfares:golden_apple_leaves',
    'bountifulfares:flowering_golden_apple_leaves',
    'bountifulfares:walnut_leaves',
    'bountifulfares:hoary_leaves',
    'quark:ancient_leaves',
    'quark:blue_blossom_leaves',
    'quark:lavender_blossom_leaves',
    'quark:orange_blossom_leaves',
    'quark:yellow_blossom_leaves',
    'quark:red_blossom_leaves',
    'spicedcider:cacao_leaves',
    'spicedcider:flowering_cacao_leaves',
    'spicedcider:pear_leaves',
    'spicedcider:flowering_pear_leaves',
    'abyssal_decor:wisteria_leaves_elder',
    'abyssal_decor:cinnamon_leaves',
    'abyssal_decor:flowering_cinnamon_leaves',
    'bountifulfares:palm_frond'
]

const corundum = ['quark:red_corundum', 'quark:orange_corundum', 'quark:yellow_corundum', 'quark:green_corundum', 'quark:blue_corundum', 'quark:indigo_corundum', 'quark:violet_corundum', 'quark:white_corundum', 'quark:black_corundum']

const stones = ['minecraft:stone', 'minecraft:andesite', 'minecraft:diorite', 'minecraft:granite', 'minecraft:tuff', 'nomansland:siltstone', 'quark:limestone', 'quark:jasper', 'quark:shale', 'quark:permafrost', 'minecraft:dripstone_block']




    
function alchemyCycling(array, cost, group) {
array.forEach((input, index) => {
    index = (index + 1) % array.length; 
    const output = array[index];

    event.custom({ "type": "botania:mana_infusion", "catalyst": { "type": "botania:block", "block": "botania:alchemy_catalyst" }, "group": group, "input": { "item": input }, "mana": cost, "output": { "count": 1, "id": output } })
})
}

leaves.forEach(leaf => {
    event.custom({ "type": "botania:mana_infusion", "catalyst": { "type": "botania:block", "block": "botania:conjuration_catalyst" }, "input": { "item": leaf }, "mana": 2000, "output": { "count": 2, "id": leaf } })
})

alchemyCycling(saplings, 12000, 'botania:sapling_cycle')
alchemyCycling(crops, 6000, 'botania:crop_cycle')
alchemyCycling(flowers, 400, 'botania:flower_cycle')
alchemyCycling(fruitSaplings, 24000, 'wmcs:fruit_sapling_cycle')
alchemyCycling(mushrooms, 120, 'botania:fungus_cycle')
alchemyCycling(shrubs, 300, 'botania:shrub_cycle')
alchemyCycling(logs, 40, 'botania:log_cycle')
alchemyCycling(fruitLogs, 30, 'wmcs:fruit_log_cycle')
alchemyCycling(corundum, 1000, 'wmcs:corundum_cycle')
alchemyCycling(stones, 20, 'botania:stone')

function alchemyCatalyst(input, output, cost, count, group) {
    event.custom({ "type": "botania:mana_infusion", "catalyst": { "type": "botania:block", "block": "botania:alchemy_catalyst" }, "group": group, "input": { "item": input }, "mana": cost, "output": { "count": count, "id": output } })
}

alchemyCatalyst('bountifulfares:apple_block', 'bountifulfares:apple_sapling', 24000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('bountifulfares:orange_block', 'bountifulfares:orange_sapling', 24000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('bountifulfares:lemon_block', 'bountifulfares:lemon_sapling', 24000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('bountifulfares:plum_block', 'bountifulfares:plum_sapling', 24000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('bountifulfares:hoary_apple_block', 'bountifulfares:hoary_apple_sapling', 24000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('bountifulfares:golden_apple_block', 'bountifulfares:golden_apple_sapling', 1000000, 1, 'wmcs:fruit_conversion')
alchemyCatalyst('botania:livingwood_avatar', 'nomansland:warding_effigy', 200000, 1, 'wmcs:effigy')
alchemyCatalyst('minecraft:sand', 'abyssal_decor:clam_empty_closed', 200000, 1, 'wmcs:clam')


event.shaped('botania:diluted_mana_pool', ['A A', ' A '], {A: 'botania:livingrock'})
event.shaped('bundle', ['A', 'B'], {A: 'minecraft:string', B: 'minecraft:leather'})
event.shapeless('glow_item_frame', ['item_frame', 'glowstone_dust'])
event.shapeless('mushroom_stew', ['2x #c:mushrooms', 'bowl'])

event.shaped('4x spicedcider:white_balloon', [' A', 'B '], {A: 'nomansland:resin', B: 'string'})
event.shaped('spicedcider:pocket_jukebox', [' A ', 'BCB', 'BBB'], {A: 'glass', B: 'copper_ingot', C: 'jukebox'})
event.shaped('2x spicedcider:rubber_cable', [' A', 'A '], {A: 'blocksabound:tar'})
event.shaped('recovery_compass', [' A ', 'ABA', ' A '], {A: 'botania:mana_powder', B: 'compass'})

event.shaped('vc_gliders:paraglider_wood', ['AAA', 'BCB', 'CDC'], {A: 'botania:manaweave_cloth', B: 'botania:mana_string', C: 'botania:livingwood_twig', D: 'botania:rune_of_air'})

event.custom({ "type": "botania:orechid_ignem", "cooldown": 100, "input": { "type": "botania:block", "block": "minecraft:decorated_pot" }, "mana": 20000, "output": { "type": "botania:block", "block": "nomansland:ancient_pot" }, "weight": 1 })
event.custom({ "type": "botania:orechid_ignem", "cooldown": 100, "input": { "type": "botania:block", "block": "minecraft:decorated_pot" }, "mana": 20000, "output": { "type": "botania:block", "block": "nomansland:large_ancient_pot" }, "weight": 1 })

event.custom({ "type": "botania:mana_infusion", "input": { "item": "bountifulfares:grass_seeds" }, "mana": 2500, "output": { "count": 1, "id": "botania:pasture_seeds" } })

event.custom({ "type": "botania:runic_altar", "catalysts": [ { "item": "botania:rune_of_fire" }, { "item": "botania:rune_of_summer" } ], "ingredients": [ { "item": "minecraft:compass" } ], "mana": 12000, "output": { "components": { "supplementaries:quill_structure": "minecraft:fortress" }, "count": 1, "id": "supplementaries:cartographers_quill" }, "reagent": { "item": "minecraft:map" } })






})