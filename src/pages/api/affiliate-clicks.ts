import type { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "@/lib/prisma"

export default async function handker(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {product, vendor, category, url} = req.query
    if(!product || !vendor || !category || !url ) {
        return res.status(400).send('Invalid affiliate link')
    }

    try {
        await prisma.affiliateClick.create({
            data: {
                product: String(product),
                vendor: String(vendor),
                category: String(category),
                url: String(url),
            }
        },)
    }catch(error) {
        // Never block redirection on tracking failure
        console.log('Affiliate click tracking failed')
    }
    res.redirect(String(url))
}