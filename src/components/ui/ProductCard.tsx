import {motion} from 'framer-motion'
import {AffiliateLink,Product,lightingProducts,securityProducts} from '@/data/products'


export default function ProductCard({name,description,brand,affiliateLinks}:Product) {
    return (
        <motion.div 
            whileHover={{ y:-6}}
            transition={{duration:0.3 ,ease: 'easeOut'}}
            className='group rounded-2xl border border-silver/10 bg-graphite/20 p-8'
            >
                {/* Product image placeholder */}
                <div className='mb-6 h-40 rounded-lg bg-black/40'/>

                {brand && (
                    <span className='text-xs text-steel tracking-wide uppercase'>
                        {brand}
                    </span>
                )}
                
                <h3 className='mt-2 mb-3 text-lg font-light'>
                    {name}
                </h3>
                <p className='text-sm text-steel leading-relaxed'>
                    {description}
                </p>

                {affiliateLinks && affiliateLinks.length > 0 &&(
                    <a 
                    href={affiliateLinks[0].url}
                    // href={`/api/affiliate-click?product=${encodeURIComponent(name)}&vendor=amazon&category=${encodeURIComponent(category)}&url=${encodeURIComponent(affiliateLinks.amazon)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='mt-6 inline-block text-xs tracking-wide
                    text-steel hover:text-silver transition'
                    >
                        View on amazon   
                    </a>
                )}

                {/* subtle underline */}
                <div className='mt-6 h-px w-8 bg-silver group-hover:w-12 transition-all'/>
            </motion.div>
    )


}