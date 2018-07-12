<ol>
{this.props.results.map((result, i) => (
  <li key={i}>{result.text}</li>
))}
</ol>


if (this.state.isLoading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
      </View>
    )
  } else {
    let data = this.state.dataSource.map((val, key) =>{
      return   (<ScrollView>
              
                <Text key={key} style={styles.item}>{val.title}</Text>
                            
               
              
            </ScrollView>)
    });

    return (
      <View style={styles.container}>
        {data}
      </View>
    );
  }

}
}


<View style={styles.container}>
          {data}
        </View>