import dayjs from 'dayjs';

export function OrderSummary(deliveryOption,cart,handleDeliveryChange){
    return (
        <div className="order-summary">

            {deliveryOption.length > 0 && cart.map((cartItem) => {

              const selectedDeliveryOption = deliveryOption.find((deliveryOptions) => {
                return deliveryOptions.id === cartItem.deliveryOptionId;
              })
              return (
                <div key={cartItem.productId} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                  </div>

                  <div className="cart-item-details-grid">
                    <img className="product-image"
                      src={cartItem.product.image} />

                    <div className="cart-item-details">
                      <div className="product-name">
                        {cartItem.product.name}
                      </div>
                      <div className="product-price">
                        {(cartItem.product.priceCents / 100).toFixed(2)}
                      </div>
                      <div className="product-quantity">
                        <span>
                          Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {
                        deliveryOption.map((delivery) => {
                          let priceString = 'Free Shipping';
                          if (delivery.priceCents > 0) {
                            priceString = `${delivery.priceCents} - Shipping`;
                          }
                          return (
                            <div key={delivery.id} className="delivery-option">
                              <input
                                type="radio"
                                checked={delivery.id === cartItem.deliveryOptionId}
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.id}`}
                                onChange={() => handleDeliveryChange(cartItem.id, delivery.id)}
                              />
                              <div>
                                <div className="delivery-option-date">
                                  {dayjs(delivery.estimatedDeliveryTimeMs).format('dddd,MMMM D')}
                                </div>
                                <div className="delivery-option-price">
                                  {
                                    priceString
                                  }
                                </div>
                              </div>
                            </div>
                          );
                        })
                      }

                    </div>
                  </div>
                </div>

              );

            })
            }


          </div>
    );
}