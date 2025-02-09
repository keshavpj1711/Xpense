import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"

const DashboardPage = () => {
  return (
    <div className="px-5">
      <h1 className="text-4xl font-bold mb-5">
        Dashboard
      </h1>

      <div className="flex flex-col gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Budget</CardTitle>
              <CardDescription>Amt spent of total amt</CardDescription>
            </CardHeader>
            <CardContent>
              <p>A slider showing the amt spent of total amt with a button to edit</p>
            </CardContent>
          </Card>
        </div>
        <div className="flex space-x-4 items-stretch">
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <div className="py-2">
                  <Button variant="outline">
                    <CardDescription>
                      <DropdownMenu>
                        <DropdownMenuTrigger>Select Account</DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Accounts</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Account1</DropdownMenuItem>
                          <DropdownMenuItem>Account2</DropdownMenuItem>
                          <DropdownMenuItem>Account2</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </CardDescription>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Expense Breakdown</CardTitle>
                <CardDescription>A button to toggle account</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;