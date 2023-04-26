import SVG from 'next/image'
import ArtsparkLogo from '@/public/images/artspark-logo.svg'

export default function Logo() {

  return (
    <SVG src={ArtsparkLogo} priority alt="artspark flame logo" height="40" width="40" />
  )
}
