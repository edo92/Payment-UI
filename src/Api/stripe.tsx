import { loadStripe } from "@stripe/stripe-js";
import { Stripe, StripeElements } from "@stripe/stripe-js";

export type StripeElem = Stripe | null;
export type Elems = StripeElements | null;

export class StripeApi {
  public static stripePromise = loadStripe(
    "pk_test_51JWHX7IrQD3LofQHOJta0yBnz0XqAkkGoCKJFim1UQsCEXzuYotqjlgTCp8HztsIPjm5SpzGJiT8rR0TnzqLz6z800pk4WVkw3"
  );
}
