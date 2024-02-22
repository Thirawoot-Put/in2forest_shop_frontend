import { useEffect } from "react";
import Button from "../../components/Button";
import ProductCardHorizontal from "../../components/ProductCardHorizontal";
import useOrder from "../../hooks/use-order";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LoadingBar from "../../components/LoadingBar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function OrderDetailBox() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const {
    userOrder,
    itemsInOrder,
    paySlip,
    getOrderDetail,
    setTargetOrder,
    cancelOrder,
  } = useOrder();

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

  const handleClickPayment = async () => {
    setTargetOrder(userOrder);
    navigate("/payment");
  };

  const handleClickCancel = async () => {
    cancelOrder(orderId);
    toast.success("Order has been canceled");
  };

  return (
    <>
      {loading && <LoadingBar />}
      <div className="flex justify-between w-[45rem] border rounded-xl p-4 gap-10">
        <div className="flex flex-col">
          {itemsInOrder.map((item) => (
            <ProductCardHorizontal
              key={item.id}
              width="w-[28rem]"
              data={item.product}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-80">
          <div className="bg-gray-300">
            <img
              src={paySlip || "/src/assets/pic/homepage/default-img.png"}
              alt="payment_slip"
            />
          </div>
          <Button text="lg" onClick={handleClickPayment}>
            Payment
          </Button>
          <Link to={"/orders"}>
            <Button color="secondary" text="lg" onClick={handleClickCancel}>
              Cancel order
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OrderDetailBox;
