import { useState } from "react";
import OrderDetailBox from "../features/order-detail/OrderDetailBox";
import useOrder from "../hooks/use-order";
import LoadingBar from "../components/LoadingBar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function OrderDetailPage() {
  const { userOrder, getOrderDetail } = useOrder();
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getOrderDetail(orderId);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="flex justify-center items-center py-8">
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="text-lg font-semibold">#{userOrder?.id}</h1>
              <p className="text-sm text-gray-500">
                order at: {userOrder?.createdAt}
              </p>
              <h1 className="text-xl font-semibold">
                THB {userOrder?.totalPrice}
              </h1>
            </div>
            <OrderDetailBox />
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDetailPage;
