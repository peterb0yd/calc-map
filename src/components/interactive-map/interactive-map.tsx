import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function InteractiveMap() {
    return (
        <GoogleMapsEmbed
            apiKey={process.env.GOOGLE_MAPS_API_KEY as string}
            height={'800px'}
            width="100%"
            mode='view'
            zoom='9'
            center={'39.5501,-105.7821'}
            region='CO'
            maptype='roadmap'
        />
    )
}