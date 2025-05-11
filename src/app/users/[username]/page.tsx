/**
 * Author: Monayem Hossain Limon
 * GitHub: https://github.com/Limon00001
 * Date: 10 May, 2025
 * @copyright 2025 monayem_hossain_limon
 */

// External imports
import { Award, BadgeCheck, Candy, Rocket, Shield } from 'lucide-react';

// Internal imports
import { AppActivityChart } from '@/components/AppActivityChart';
import CardList from '@/components/CardList';
import EditUser from '@/components/EditUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Progress } from '@/components/ui/progress';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';

// User Component
const SingleUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>John Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-4 flex flex-col lg:flex-row gap-8">
        {/* Left */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-bold mb-6">User Badges</h1>
            <div className="flex gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={40}
                    className="bg-blue-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={40}
                    className="bg-red-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={40}
                    className="bg-yellow-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Award
                    size={40}
                    className="bg-orange-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Rocket
                    size={40}
                    className="bg-teal-500/50 rounded-full p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-muted-foreground text-sm">
                    This user is verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="font-bold mb-2">User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Edit</Button>
                </SheetTrigger>
                <EditUser />
              </Sheet>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <p className="text-muted-foreground text-sm">
                Profile Completion.
              </p>
              <Progress value={56} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="font-bold">Username:</span>
                <span className="text-muted-foreground">John Doe</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Email:</span>
                <span className="text-muted-foreground">john@example.com</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Location:</span>
                <span className="text-muted-foreground">Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-2">
                <span className="font-bold">Role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Joined on 2025/05/15
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/* Right */}
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg space-y-3">
            <div className="flex items-center gap-4">
              <Avatar className="size-8">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h1 className="text-xl font-semibold">John Doe</h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus itaque ipsum ullam similique odit nesciunt nihil
              reiciendis molestiae quisquam enim.
            </p>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-bold mb-6">User Activity</h1>
            <AppActivityChart />
          </div>
        </div>
      </div>
    </div>
  );
};

// Export
export default SingleUserPage;
