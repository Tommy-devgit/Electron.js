import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

type BaseChartProps = {
    data: { value: number | undefined }[];
};

export function BaseChart(props: BaseChartProps) {
    return (
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <AreaChart data={props.data}>
                <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                <XAxis stroke="transparent" height={0} />
                <YAxis domain={[0, 100]} stroke="transparent" width={0} />
                <Area
                    fillOpacity={0.4}
                    fill="#0A4D5C"
                    stroke="#5DD4EE"
                    strokeWidth={3}
                    type="monotone"
                    dataKey="value"
                    isAnimationActive={false}
                />
            </AreaChart>

        </ResponsiveContainer>
    )
}