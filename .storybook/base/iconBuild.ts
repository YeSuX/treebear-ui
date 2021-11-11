const req = require.context('../../packages/components/icon/svgs', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)

requireAll(req)
