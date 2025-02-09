"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "Food", visitors: 275, fill: "var(--color-Food)" },
  { category: "Makeup", visitors: 200, fill: "var(--color-Makeup)" },
  { category: "Healthcare", visitors: 287, fill: "var(--color-Healthcare)" },
  { category: "Stationary", visitors: 173, fill: "var(--color-Stationary)" },
  { category: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  Amount_Spent: {
    label: "Amount_Spent",
  },
  Food: {
    label: "Food",
    color: "hsl(var(--chart-1))",
  },
  Makeup: {
    label: "Makeup",
    color: "hsl(var(--chart-2))",
  },
  Healthcare: {
    label: "Healthcare",
    color: "hsl(var(--chart-3))",
  },
  Stationary: {
    label: "Stationary",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function MonthlyBreakdown() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle></CardTitle>
        <CardDescription>January - February 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              naceKey="Category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Rupees
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total money spent up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Just a div
        </div>
      </CardFooter>
    </Card>
  );
}

export default MonthlyBreakdown;