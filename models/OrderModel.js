import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            menuItemsId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
            quantity: { type: Number, required: true },
        },
    ],

    totalAmount: {type: Number, required: true},
    status: {type: String, enum: ["pending", "completed", "cancelled"], default: "pending", required: true},
    createdAt: {type: Date, default: Date.now, required: true},

});

export default mongoose.model("Order", orderSchema);