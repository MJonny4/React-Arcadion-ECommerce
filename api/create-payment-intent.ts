import Stripe from 'stripe'
import 'dotenv/config'

const stripe = new Stripe(process.env.VITE_APP_STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-04-10',
})

interface PaymentIntentData {
    cart: any[]
    shipping_fee: number
    total_amount: number
}

export default async function handler(req, res) {
    console.log('req.method:', req.method)
    console.log('req.body:', req.body)
    if (req.method === 'POST') {
        try {
            const { cart, shipping_fee, total_amount }: PaymentIntentData = await req.body

            const calculateOrderAmount = () => {
                return shipping_fee + total_amount
            }

            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(),
                currency: 'eur',
            })

            console.log('paymentIntent:', paymentIntent)
            res.status(200).json({ clientSecret: paymentIntent.client_secret })
        } catch (error) {
            console.error('Error creating payment intent:', error)
            res.status(500).json({ error: 'Error creating payment intent' })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}
