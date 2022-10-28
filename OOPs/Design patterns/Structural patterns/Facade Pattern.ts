
/**
 * Facade is a structural design pattern that provides a simplified interface to a complex system of classes, 
 * library or framework.
 * 
 * 
 * A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. 
 * A facade might provide limited functionality in comparison to working with the subsystem directly. 
 * However, it includes only those features that clients really care about.
 * 
 * Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, 
 * but you just need a tiny bit of its functionality.
 */

class MyVideo{
    public content: string;
    public size: number

    constructor(content: string, size: number) {
        this.content = content; 
        this.size = size;
    }
    
}


class VideoCompression{

    // Facade function
    public compress(file: MyVideo): MyVideo{
        // do lots of operation to compress fill
        // work with lot's of other classed to compress the file
        this.opration_1();
        this.opration_2()
        this.opration_N()
        file.size = +((file.size / 1.5).toFixed(2))
        return file
    }

    private opration_1(){
        // do something
    }

    private opration_2(){
        // do something
    }

    private opration_N(){
        // do something
    }


}


(function(){
    const videoTool = new VideoCompression()
    let myVideo = new MyVideo(' This is my video', 500);

    console.log('size before compression: ' + myVideo.size + ' KB');
    myVideo = videoTool.compress(myVideo) // simple function interface for client

    console.log('size after compression: ' + myVideo.size + ' KB');
})()