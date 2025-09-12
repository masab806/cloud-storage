import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts"
import { ChartContainer } from "../ui/chart"
import type { ChartConfig } from "../ui/chart"

export const description = "A radial chart with text"

const chartData = [
  { browser: "chrome", storage: 65, fill: "#FFFFFF" },
]

const chartConfig = {
  storage: {
    label: "Storage",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartRadialText() {
  return (
    <ChartContainer
      config={chartConfig}
      className="w-[200px] h-[200px] mx-auto" // 👈 fixed size for chart
    >
      <ResponsiveContainer>
        <RadialBarChart
          data={chartData}
          startAngle={0}
          endAngle={250}
          innerRadius={80}
          outerRadius={110}
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            className="first:fill-[#FB8E91] last:fill-[#FF7474]"
            polarRadius={[86, 74]}
          />
          <RadialBar
            dataKey="storage"
            fill="#FB8E91" // bar color
            background={{ fill: "#FFFFFF" }} // ring color
            cornerRadius={10}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
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
                        className="fill-white text-4xl font-bold"
                      >
                        {chartData[0].storage.toLocaleString()}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-white font-bold"
                      >
                        Space Used
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
