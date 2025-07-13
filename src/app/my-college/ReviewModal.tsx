"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { addReview } from "../actions/addReview";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ReviewModalProps {
  admissionId: string;
  onReviewAdded?: () => void;
}

export default function ReviewModal({
  admissionId,
  onReviewAdded,
}: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!rating || !review) {
      toast.error("Please provide rating and review!");
      return;
    }

    try {
      setIsSubmitting(true);

      await addReview({ admissionId, rating, review });

      toast.success("Review submitted successfully");
      setIsOpen(false);
      setRating(0);
      setReview("");

      if (onReviewAdded) onReviewAdded();
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Your Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Rating</Label>
            <div className="flex space-x-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${
                    star <= rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="review">Review</Label>
            <Input
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={isSubmitting || !rating || !review}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
