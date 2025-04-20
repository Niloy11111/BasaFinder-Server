import { Router } from "express";
import { ApplicationRoutes } from "../modules/application/application.routes";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { CouponRoutes } from "../modules/coupon/coupon.routes";
import { MetaRoutes } from "../modules/meta/meta.route";
import { OrderRoutes } from "../modules/order/order.routes";
import { RentalRoutes } from "../modules/rental/rental.routes";
import { ReviewRoutes } from "../modules/review/review.routes";
import { SSLRoutes } from "../modules/sslcommerz/sslcommerz.routes";
import { UserRoutes } from "../modules/user/user.routes";
const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  // {
  //   path: "/shop",
  //   route: ShopRoutes,
  // },
  // {
  //   path: "/category",
  //   route: CategoryRoutes,
  // },
  // {
  //   path: "/brand",
  //   route: BrandRoutes,
  // },
  {
    path: "/product",
    route: RentalRoutes,
  },
  {
    path: "/application",
    route: ApplicationRoutes,
  },
  // {
  //   path: "/flash-sale",
  //   route: FlashSaleRoutes,
  // },
  {
    path: "/order",
    route: OrderRoutes,
  },
  {
    path: "/coupon",
    route: CouponRoutes,
  },
  {
    path: "/ssl",
    route: SSLRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/meta",
    route: MetaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
