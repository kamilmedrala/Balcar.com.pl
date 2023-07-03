export default ({ app }, inject) => {
    inject('formatPageData', data => {
        
        if (data.acf && data.acf.photo_gallery) {
            const r = new RegExp(/_gallery\b/)
            const galleries = data.acf.photo_gallery
            
            Object.keys(galleries).forEach((key,index) => {
                if (r.test(key)) {
                    let tempKey = key.replace('_gallery','')
                    if (data.acf[tempKey]) {
                        data.acf[tempKey].gallery = galleries[key][index]
                    }
                }
            })
        }
    })
}