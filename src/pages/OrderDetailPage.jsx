import OrderDetailBox from "../features/order-detail/OrderDetailBox";

function OrderDetailPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-lg font-semibold">#orderId</h1>
          <p className="text-sm text-gray-500">order at: createdAt</p>
          <h1 className="text-xl font-semibold">THB totalPrice</h1>
        </div>
        <OrderDetailBox />
      </div>
    </div>
  );
}

export default OrderDetailPage;
