export default function DetermineRatingName(rating: number) {
  if (rating > 4.6) return "Excellent";
  if (rating > 3.8) return "Very good";
  if (rating > 3.0) return "Average";
  if (rating > 2.0) return "Acceptable";
  if (rating > 0) return "Not Recommended";
}
