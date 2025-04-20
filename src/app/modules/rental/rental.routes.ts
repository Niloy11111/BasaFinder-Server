import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import auth from "../../middleware/auth";
import { parseBody } from "../../middleware/bodyParser";
import validateRequest from "../../middleware/validateRequest";
import { UserRole } from "../user/user.interface";
import { ProductController } from "./rental.controller";
import { rentalValidation } from "./rental.validation";

const router = Router();

router.get("/", ProductController.getAllProduct);

router.get("/trending", ProductController.getTrendingProducts);

router.get(
  "/my-shop-products",
  auth(UserRole.USER),
  ProductController.getMyShopProducts
);

router.get("/:productId", ProductController.getSingleProduct);

// auth(UserRole.Landlord),
router.post(
  "/",
  auth(UserRole.Landlord),
  multerUpload.fields([{ name: "images" }]),
  parseBody,
  validateRequest(rentalValidation.createRentalValidationSchema),
  ProductController.createProduct
);

router.patch(
  "/:productId",
  auth(UserRole.Landlord, UserRole.ADMIN),
  multerUpload.fields([{ name: "images" }]),
  parseBody,
  ProductController.updateProduct
);

router.delete(
  "/:productId",
  auth(UserRole.Landlord, UserRole.ADMIN),
  ProductController.deleteProduct
);

export const RentalRoutes = router;
