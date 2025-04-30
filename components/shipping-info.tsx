import { Truck, Package, RefreshCw, Globe } from "lucide-react"

export default function ShippingInfo() {
  return (
    <section className="py-12 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <Truck className="h-8 w-8 text-neutral-700 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-2">Free Shipping</h3>
              <p className="text-sm text-neutral-600">Free standard shipping on all orders over $100.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Package className="h-8 w-8 text-neutral-700 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-2">Duties & Taxes Covered</h3>
              <p className="text-sm text-neutral-600">We cover import duties & taxes for all international orders.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <RefreshCw className="h-8 w-8 text-neutral-700 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-2">Easy Returns</h3>
              <p className="text-sm text-neutral-600">30-day returns on all unworn items.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="h-8 w-8 text-neutral-700 flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-2">International Shipping</h3>
              <p className="text-sm text-neutral-600">We ship to over 100 countries worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
