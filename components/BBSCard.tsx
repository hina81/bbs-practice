import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



const BBSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam porro
          culpa ex esse ratione facere nesciunt sint eveniet et nostrum
          accusantium repellendus nam, quasi impedit beatae magnam odit hic
          similique?
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/bbs-posts/1"} className="text-blue-400">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default BBSCard
