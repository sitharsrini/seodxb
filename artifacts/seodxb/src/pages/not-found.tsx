import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4 pt-32 pb-24">
      <div className="w-full max-w-md text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-[-0.03em] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-3">Page not found</h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="rounded-full bg-primary">
            <Link href="/">
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
