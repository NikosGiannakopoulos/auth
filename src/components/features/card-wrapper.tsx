import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Social from "@/components/features/social";
import BackButton from "@/components/features/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  titleLabel: string;
  descriptionLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  titleLabel,
  descriptionLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[350px] space-y-2">
      <CardHeader>
        <CardTitle>{titleLabel}</CardTitle>
        <CardDescription>{descriptionLabel}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
