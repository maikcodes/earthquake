import FeatureCard from "./FeatureCard"

function FeatureList({ features }) {
    return (
        <div className="flex flex-col gap-2 pr-1">
            {features?.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
            ))}
        </div>
    )
}
export default FeatureList