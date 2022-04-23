import portfolioItems from '@/stores/data.json'

export function getExtensionsPortfolioItems() {
    const results = new Set()
    const tags = [
        'extension',
        'addon'
    ]

    const portfolioSorted = portfolioItems.items.sort((a, b) => {
        const timeA = new Date(a.timeText).getTime()
        const timeB = new Date(b.timeText).getTime()
        if (timeA > timeB) {
            return -1
        }
        if (timeA < timeB) {
            return 1
        }
        return 0
    })

    if (portfolioSorted.length === 0) {
        return
    }

    for (let ti = 0, tlen = tags.length; ti < tlen; ti++) {
        for (let ii = 0, ilen = portfolioSorted.length; ii < ilen; ii++) {
            if (portfolioSorted[ii].tags.indexOf(tags[ti]) !== -1) {
                results.add(portfolioSorted[ii])
            }
        }
    }
    return Array.from(results)
}

export function getPortfolioItemsByTags (tagsArray) {
    const results = new Set()

    const portfolioSorted = portfolioItems.items.sort((a, b) => {
        const timeA = new Date(a.timeText).getTime()
        const timeB = new Date(b.timeText).getTime()
        if (timeA > timeB) {
            return -1
        }
        if (timeA < timeB) {
            return 1
        }
        return 0
    })

    if (portfolioSorted.length === 0) {
        return []
    }

    if(typeof(tagsArray) === 'undefined' || tagsArray.length && tagsArray.length === 0) {
        return portfolioSorted
    }

    for (let ti = 0, tlen = tagsArray.length; ti < tlen; ti++) {
        for (let ii = 0, ilen = portfolioSorted.length; ii < ilen; ii++) {
            if (portfolioSorted[ii].tags.indexOf(tagsArray[ti]) !== -1) {
                results.add(portfolioSorted[ii])
            }
        }
    }
    return Array.from(results)
}

export function getPortfolioItemBySlug (slug) {
    const items = portfolioItems.items
    let resultItem = {
        slug: '',
        title: ''
    }

    for (const i in items) {
        if (Object.prototype.hasOwnProperty.call(items, i)) {
            if (items[i].slug === slug) {
                resultItem = items[i]
                break
            }
        }
    }
    return resultItem
}