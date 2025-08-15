import type { Repo } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function RepoCard({ repo }: { repo: Repo }) {
  const { description, owner, html_url, full_name, visibility, topics } = repo;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src={owner.avatar_url} />
              <AvatarFallback>{owner.login.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle className="capitalize">{full_name}</CardTitle>
          </div>
          <Badge variant="success" className="capitalize font-bold">
            {visibility}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-sm font-medium mb-2">Topics</h3>
        <div className="flex items-center gap-2 flex-wrap">
          {topics.map((topic) => (
            <Badge variant="outline" className="capitalize">
              {topic}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild>
          <a href={html_url} target="_blank">
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
