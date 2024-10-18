import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const returnSteps = [
  {
    title: "Initiate Return",
    description: "Log into your account and go to your order history. Select the item you wish to return and follow the prompts."
  },
  {
    title: "Print Label",
    description: "Once your return is approved, we'll email you a prepaid return shipping label."
  },
  {
    title: "Pack Item",
    description: "Pack the item securely in its original packaging if possible. Include all accessories and tags."
  },
  {
    title: "Ship",
    description: "Attach the prepaid label to your package and drop it off at any authorized shipping location."
  },
  {
    title: "Refund",
    description: "Once we receive and process your return, we'll issue a refund to your original payment method within 5-7 business days."
  }
]

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Returns Policy</h1>
      <p className="mb-6">We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery for a full refund or exchange.</p>
      
      <h2 className="text-2xl font-bold mb-4">How to Return an Item</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {returnSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Return Conditions</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Items must be unused and in the same condition that you received them.</li>
        <li>Items must be in the original packaging.</li>
        <li>You must have the receipt or proof of purchase.</li>
      </ul>
      
      <p className="mb-4">
        Please note that some items are non-returnable, including:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Gift cards</li>
        <li>Downloadable software products</li>
        <li>Certain health and personal care items</li>
      </ul>
      
      <p>
        If you have any questions about our returns policy, please don't hesitate to contact our customer service team.
      </p>
    </div>
  )
}