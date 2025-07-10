export default function Theme() {
  return (
    <div className="p-8 bg-white text-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Project color theme</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Background Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-lg shadow-md bg-bg-white flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-white (#FFFFFF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-lightest flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-lightest border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-lightest (#FBFBFC)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-light flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-light border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-light (#F7F7F7)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-neutral flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-neutral border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-neutral (#E8E8E8)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-secondary flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-secondary border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-secondary (#FEF8B8)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-tertiary flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-tertiary border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-tertiary (#B4A7F5)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-violet flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-violet border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-violet (#F6A7F5)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-pink flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-pink border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              bg-pink (#FF6575)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-red flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-red border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-red (#FF599)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-orange flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-orange border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-orange (#E55649)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-gray border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-gray (#72768B)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-dark-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-dark-gray border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-dark-gray (#23282D)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-darker-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-darker-gray border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-darker-gray (#060B11)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-bg-black flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-bg-black border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              bg-black (#000000)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-white">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-white (#FFFFFF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-dark-gray">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-dark-gray (#DED9E0)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-darker-gray">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-darker-gray (#FBC34A)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-yellow">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-yellow (#FBC54A)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-orange">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-orange (#F47F5)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-light-purple">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-light-purple (#FF65978)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-green">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-green (#68B978)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-purple">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-purple (#392C7D)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-dark-blue">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-dark-blue (#002058)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-black">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-black (#000000)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-dark-black-alt">Aa</p>
            <p className="text-sm mt-2 text-center text-black">
              text-dark-black-alt (#000000)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center h-24">
            <p className="text-xl font-bold text-text-dark-black-more-alt">
              Aa
            </p>
            <p className="text-sm mt-2 text-center text-black">
              text-dark-black-more-alt (#000000)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Fill Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-lg shadow-md bg-fill-white flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-white (#FFFFFF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-light-blue flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-light-blue border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-light-blue (#E8DFFF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-light-pink flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-light-pink border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-light-pink (#FF7F8)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-peach flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-peach border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-peach (#FF9EE)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-light-purple-alt flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-light-purple-alt border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-light-purple-alt (#ECEFFE)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-light-green flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-light-green border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              fill-light-green (#E9F6F2)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-orange flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-orange border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-orange (#FF549A)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-red-orange flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-red-orange border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-red-orange (#FF5384)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-dark-green flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-dark-green border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-dark-green (#3B97C3)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-blue flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-blue border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-blue (#2E35B0)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-dark-purple flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-dark-purple border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-dark-purple (#681986)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-darker-purple flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-darker-purple border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-darker-purple (#58247E)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-darkest-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-darkest-gray border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-darkest-gray (#000000)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-fill-black flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-fill-black border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-white">
              fill-black (#000000)
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Border Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="p-4 rounded-lg shadow-md border-2 border-border-lightest flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-lightest (#FFFFFF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-light-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-light-gray (#FCFCFC)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-gray flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-gray (#EDEDED)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-light-blue flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-light-blue (#E9ECEF)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-purple flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-purple (#B2B1FC)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-pink flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-pink (#B4A7F5)
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md border-2 border-border-red flex flex-col items-center justify-center h-24">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-300"></div>
            <p className="text-sm mt-2 text-center text-black">
              border-red (#FF6575)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
