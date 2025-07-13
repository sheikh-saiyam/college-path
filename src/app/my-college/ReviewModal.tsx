"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { addReview } from "../actions/addReview";
import { Textarea } from "@/components/ui/textarea";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ReviewModalProps {
  admissionId: string;
  userId?: string;
  userName?: string;
  userCollege?: string;
  userAvatar?: string;
  onReviewAdded?: () => void;
}

export default function ReviewModal({
  admissionId,
  userName,
  userCollege,
  userAvatar,
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

      await addReview({
        admissionId,
        rating,
        review,
        userName,
        userCollege,
        userAvatar,
      });

      toast.success("Review submitted successfully");
      setIsOpen(false);
      setRating(0);
      setReview("");

      if (onReviewAdded) onReviewAdded();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit review!");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer bg-gradient-to-r from-bg-violet to-bg-pink hover:opacity-80 hover:scale-105 duration-300 text-white font-medium">Add Review</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mt-1 text-base">Add Your Review</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="border-t -mt-2 pt-4 space-y-4">
          <div>
            <Label>Rating</Label>
            <div className="flex space-x-1 mt-2">
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
            <Textarea
              id="review"
              value={review}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setReview(e.target.value)
              }
              placeholder="Write your review here..."
              className="mt-2"
            />
          </div>
          <Button
            size={"sm"}
            type="submit"
            disabled={isSubmitting || !rating || !review}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
